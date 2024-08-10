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
    <div className="grid gap-8 grid-cols-2">
      <div className="flex flex-col gap-3">
        <Image src={Blog1} alt="Blog preview image 1" />
        <Badge className="bg-lerndise-purple h-[37px] w-[106px] flex justify-center">
          News
        </Badge>
        <div>
          <div className="w-[300px] flex flex-col gap-2">
            <h3 className="text-sm font-bold">
              Class adds $30 million to its balance sheet for a zoom-friendly
              edtech solution.
            </h3>
            <p className="text-xs">
              Class launched less than a year ago by blackboard co-founder
              michael chasen integrates exclusively{" "}
            </p>
          </div>
          <Button variant="link" className="w-auto p-0">
            Read more
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {blogPreview.map((blog) => (
          <div key={blog.id} className="flex gap-3">
            <Image
              src={blog.img}
              className="h-[132px] object-cover"
              alt="Blog preview image 1"
            />
            <div>
              <div className="w-[300px] flex flex-col gap-2">
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
