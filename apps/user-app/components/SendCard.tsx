"use client";

import React from "react";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { Button } from "@repo/ui/button";
import { p2ptransfer } from "../app/lib/actions/p2ptransfer";

function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title="Send">
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"Number"}
              label="Number"
              onChange={(value) => {
                setNumber(value);
              }}
            />
            <TextInput
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => {
                setAmount(value);
              }}
            />
            <div className="pt-4 flex justify-center">
              <Button
                onClick={() => {
                  // console.log("STARTED");
                  p2ptransfer(Number(amount) * 100, number);
                  // console.log("ENDED");
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}

export default SendCard;
