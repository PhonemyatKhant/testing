const testObj = {
    name: 'pyaewa',
    age: 23
}

export async function GET(req) {

    return new Response(JSON.stringify(testObj), { status: 200 })
}
