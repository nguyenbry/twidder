"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  TwitterDialogContent,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { FaTwitter } from "react-icons/fa";

export function LoginDialog() {
  const [emailOrUsername, setEmail] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);

  function focusEmail() {
    emailRef.current?.focus();
  }

  const labelShouldStayAtTop = emailOrUsername.trim().length > 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <TwitterDialogContent className="w-[40vw] pb-24">
        <div className="my-3 flex h-12 justify-center">
          <FaTwitter className="h-8 w-8 text-birdgrey" />
        </div>
        <div className="flex justify-center px-40">
          <div className="w-full">
            <span className="text-4xl font-semibold">Sign in to Twitter</span>
            {/* had to do this wrapped div because the border going from 1px to 2px was making things shift/resize  */}
            <div
              className="relative my-8 h-[60px] cursor-text rounded-md border focus-within:border-transparent"
              onClick={focusEmail}
            >
              <div className="peer box-border flex h-full w-full items-end rounded-md border-[3px] border-transparent focus-within:border-tblue">
                <input
                  value={emailOrUsername}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-1 ml-2 w-full bg-transparent ring-0 focus:outline-none"
                  id="emailOrUsername"
                  ref={emailRef}
                />
              </div>
              <span
                className={cn(
                  "absolute left-[9px] text-accent-text transition-all",
                  "",
                  labelShouldStayAtTop
                    ? "top-2 text-sm"
                    : "top-1/2 -translate-y-1/2 text-lg text-birdgrey peer-focus-within:top-2 peer-focus-within:translate-y-0 peer-focus-within:text-sm peer-focus-within:text-tblue"
                )}
              >
                Email or username
              </span>
            </div>
            <button className="my-3 w-full rounded-full bg-login-next py-2 font-bold text-black transition hover:bg-login-next-hover">
              Next
            </button>
            <button className="my-3 w-full rounded-full border border-accent-text py-2 font-bold transition hover:bg-login-next-hover/10">
              Forgot Password?
            </button>
            <div className="mt-10">
              <span className="text-accent-text">
                Don&apos;t have an account?
              </span>{" "}
              <span className="text-tblue">Sign up</span>
            </div>
          </div>
        </div>
      </TwitterDialogContent>
    </Dialog>
  );
}
