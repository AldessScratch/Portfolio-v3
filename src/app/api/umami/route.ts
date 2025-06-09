import { NextRequest, NextResponse } from "next/server";
import { getClient } from '@umami/api-client';

interface StatsResponse {
    ok: boolean;
    data: {
        pageviews: { value: number };
        visitors: { value: number };
        totaltime: { value: number };
        visits: { value: number };
    };
    error?: string;
}

interface CombinedResponse {
    statsData: StatsResponse['data'];
    activeData: {
        visitors: number;
    };
}

const PERIODS: Record<string, number> = {
    "24h": 1,
    "7d": 7,
    "30d": 30,
};

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const now = Date.now();
        const period = searchParams.get("period") || "30d";
        const days = PERIODS[period] || 30;

        const startAt = (now - days * 24 * 60 * 60 * 1000);
        const endAt = now;
        
        const client = getClient();
        const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

        if (!id) {
            return NextResponse.json({ error: 'Website ID not configured' }, { status: 500 });
        }

        const statsResponse = await client.getWebsiteStats(id!, {
            startAt,
            endAt
        });

        const activeResponse = await client.getWebsiteActive(id!);
        
        if (!statsResponse.ok || !activeResponse.ok) {
            return NextResponse.json(
                { 
                    error: statsResponse.error || activeResponse.error || 'Failed to fetch metrics'
                },
                { status: 500 }
            );
        }

        // Create the active data object with the expected shape
        const activeData = {
            visitors: typeof activeResponse.data === 'object' && 'visitors' in activeResponse.data 
                ? (activeResponse.data.visitors as number)
                : 0
        };
        
        const combinedData : CombinedResponse = {
            statsData: statsResponse.data!,
            activeData
        };
        
        console.log(combinedData);
        return NextResponse.json(combinedData);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}