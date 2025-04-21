import { getCountryList } from '@/app/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
    const countries = getCountryList();
    return NextResponse.json(countries);
}
