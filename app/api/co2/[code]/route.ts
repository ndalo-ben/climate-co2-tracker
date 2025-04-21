import { getCountryData } from '@/app/lib/data';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { code: string } }) {
    const { code } = await context.params; // Awaiting params

    const countryData = getCountryData(code.toUpperCase());

    if (!countryData.length) {
        return NextResponse.json({ error: 'Country not found or has no CO₂ data' }, { status: 404 });
    }

    return NextResponse.json(countryData);
}
