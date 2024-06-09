"use client";

import React, { useEffect } from "react";
import { Post } from "../../components/post";
import { Menu } from "@/components/menu";
import { apiCall, api_body, api_name, api_target, api_type } from "@/lib/api";
import { PostType } from "../../lib/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { dummy } from "@/components/dummy";
import {
  selectAtom,
  bodyAtom,
  nameAtom,
  targetAtom,
  typeAtom,
} from "@/components/menu";
import { useAtom } from "jotai";

function Exercises() {
  const [select] = useAtom(selectAtom);
  const [body] = useAtom(bodyAtom);
  const [target] = useAtom(targetAtom);
  const [name] = useAtom(nameAtom);
  const [type] = useAtom(typeAtom);

  const { data, isLoading } = useQuery({
    queryKey: ["exer", select, body ?? target ?? name ?? type],
    queryFn: () => {
      if (select == "name") {
        return api_name(name);
      }
      if (select == "type") {
        return api_type(type);
      }
      if (select == "target") {
        return api_target(target);
      }
      if (select == "bodyPart") {
        return api_body(body);
      }
      return apiCall();
    },
  });

  // console.log(data)

  // const data = dummy

  return (
    <>
      <Menu />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-8 px-5 ml-[300px] py-4 ">
      {
        !isLoading &&
          data.map((item: PostType, index: any) => {
            return (
              <>
                <Post item={item} isFav={false} index={index} />
              </>
            );
          })}
      </div>
    </>
  );
}

export default Exercises;
