import connectMongoDB from "@/libs/mongodb";
import TopicModel from "@/models/topic"
import { NextResponse } from "next/server";

/* export async function PUT(request, {params}){
    const {id} = params
    const {newTitle: title,  newDescription: description } = await request.json()
    await connectMongoDB()
    await TopicModel.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({ message: 'Topic updated!'}, { status: 200 })
} */

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await TopicModel.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }

  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await TopicModel.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  }