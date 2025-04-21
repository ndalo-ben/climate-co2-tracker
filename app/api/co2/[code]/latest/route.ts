import { getCountryData } from '@/app/lib/data';
import { NextResponse } from 'next/server';

export async function GET(_: Request, context: { params: { code: string } }) {
    const { code } = await context.params;
    const normalizedCode = code.toUpperCase(); // Normalize the code to uppercase

    

    const countryData = getCountryData(normalizedCode);

    if (!countryData.length) {
        return NextResponse.json({ error: 'Country not found or has no CO₂ data' }, { status: 404 });
    }

    const latestEntry = countryData.reduce((latest, current) =>
        current.year > latest.year ? current : latest
    );

    return NextResponse.json(latestEntry);
}
