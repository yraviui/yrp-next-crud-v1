import connectMongoDB from "@/libs/mongodb"
import TopicModel from '@/models/topic'
import { NextResponse } from "next/server"

export async function POST(reqest){
    const { title, description } = await reqest.json()
    await connectMongoDB()
    await TopicModel.create({title, description})
    return NextResponse.json({ message: 'Topic Created'}, {status: 201})
}

export async function GET(){
    await connectMongoDB()
    const topics = await TopicModel.find()
    return NextResponse.json({topics})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await TopicModel.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Topic Deleted'}, { status: 200})
}