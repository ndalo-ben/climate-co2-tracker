import { getCountryData } from '@/app/lib/data';
import { NextResponse } from 'next/server';

type Props = {
    params: Promise<{
        code: string;
    }>;
};

export async function GET(req: Request, { params }: Props) {
    const { code } = await params; // Access the dynamic route parameter
    const normalizedCode = code.toUpperCase(); // Normalize the code to uppercase

    const countryData = await getCountryData(normalizedCode);

    if (!countryData.length) {
        return NextResponse.json({ error: 'Country not found or has no CO₂ data' }, { status: 404 });
    }

    const latestEntry = countryData.reduce((latest, current) =>
        current.year > latest.year ? current : latest
    );

    return NextResponse.json(latestEntry);
}
