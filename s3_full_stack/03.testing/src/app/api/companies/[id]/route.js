// app/api/companies/[id]/route.js
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const client = await clientPromise;
<<<<<<< HEAD
    const db = client.db('assignment');
    const coll = db.collection('companies');
=======
    const db = client.db("workbook");          
    const coll = db.collection("companies");  

>>>>>>> 080aaff40936301487c94c67ac375ba7743f5e0f

    const doc = await coll.findOne({ _id: new ObjectId(id) });
    if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json(doc, { status: 200 });
  } catch (err) {
    console.error('GET /api/companies/:id error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
