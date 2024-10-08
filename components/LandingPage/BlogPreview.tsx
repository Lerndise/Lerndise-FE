/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Blog1 from "@/public/Blog1.png";
import Blog2 from "@/public/Blog2.png";
import Blog3 from "@/public/Blog3.png";
import Blog4 from "@/public/Blog4.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

const BlogPreview = () => {
  const blogPreview = [
    {
      id: 1,
      img: Blog2,
      title: ` Class adds $30 million to its balance sheet for a zoom-friendly edtech solution.`,
      context: `Class launched less than a year ago by blackboard co-founder michael chasen integrates exclusively.`,
    },
    {
      id: 2,
      img: Blog3,
      title: `Zoom’s earliest investors are betting millions on a better zoom for schools.`,
      context: `Zoom was never created to be a consumer product. Nonetheless, the returns from betting on Zoom.`,
    },
    {
      id: 3,
      img: Blog4,
      title: `Former Blackboard CEO Raises $16m to bring LMS features to Zoom classrooms`,
      context: `This year, investors have reaped big financial returns from betting on Zoom.`,
    },
  ];
  return (
    <div className="grid gap-10 xl:grid-cols-2">
      <div className="flex flex-col md:items-center lg:items-start gap-3">
        <Image src={Blog1} alt="Blog preview image 1" />
        <Badge className="bg-lerndise-purple h-[37px] w-[106px] flex justify-center">
          News
        </Badge>
        <div>
          <div className="w-[300px] flex flex-col gap-2">
            <h3 className="text-sm font-bold">
              Inclusive Intelligence: The Impact of AI on Education for all
              Learners
            </h3>
            <p className="text-xs">
              Artificial Intelligence (AI) could revolutionize higher education
              by enhancing efficiency, inclusivity, and responsiveness to
              21st-century challenges across various institutions.
            </p>
          </div>
          <Button variant="link" className="w-auto p-0">
            Read more
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 xl:grid-cols-1">
        {blogPreview.map((blog) => (
          <div key={blog.id} className="flex flex-col xl:flex-row gap-3">
            <Image
              src={blog.img}
              className="h-[132px] object-cover"
              alt="Blog preview image 1"
            />
            <div>
              <div className="w-[300px] md:w-auto flex flex-col gap-2">
                <h3 className="text-sm font-bold">{blog.title}</h3>
                <p className="text-xs">{blog.context}</p>
              </div>
              <Button variant="link" className="w-auto p-0">
                Read more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
