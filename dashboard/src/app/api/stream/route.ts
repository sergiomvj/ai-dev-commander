import { NextRequest, NextResponse } from 'next/server';
import redis from '@/lib/redis';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const encoder = new TextEncoder();
    const sub = new redis.constructor(redis.options) as any; // Create a duplicate connection for subscription

    const stream = new ReadableStream({
        async start(controller) {
            // Subscribe to relevant channels
            await sub.subscribe('agent:events', 'agent:logs', 'system:status');

            sub.on('message', (channel: string, message: string) => {
                const data = JSON.stringify({
                    channel,
                    ...JSON.parse(message),
                    timestamp: new Date().toISOString(),
                });
                controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            });

            // Keep connection alive
            const interval = setInterval(() => {
                controller.enqueue(encoder.encode(': keepalive\n\n'));
            }, 15000);

            req.signal.addEventListener('abort', () => {
                clearInterval(interval);
                sub.disconnect();
            });
        },
        cancel() {
            sub.disconnect();
        }
    });

    return new NextResponse(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
        },
    });
}
