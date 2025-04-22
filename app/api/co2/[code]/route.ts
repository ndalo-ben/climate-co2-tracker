import { getCountryData } from '@/app/lib/data';
import { NextResponse } from 'next/server';

type Props = {
    params: Promise<{
        code: string;
    }>;
};

export async function GET(req: Request, {params}: Props) {
    try {
        // Extract the dynamic route parameter
        const { code } = await params;

        // Normalize the code to uppercase
        const normalizedCode = code.toUpperCase();

        // Fetch country data (await if getCountryData is async)
        const countryData = await getCountryData(normalizedCode);

        // Handle case where no data is found
        if (!countryData || countryData.length === 0) {
            return NextResponse.json(
                { error: 'Country not found or has no CO₂ data' },
                { status: 404 }
            );
        }

        // Return the country data as JSON
        return NextResponse.json(countryData);
    } catch (error) {
        // Handle unexpected errors
        return NextResponse.json(
            { error: 'An unexpected error occurred', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
