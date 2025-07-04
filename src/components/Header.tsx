"use client";
import React from "react";
import { Button, Flex } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import SearchProperties from "./SearchProperties";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="flex-between">
        <div className="flex-align-center" style={{ gap: 16 }}>
          <img
            src="/images/logo.png"
            alt="logo"
            width={200}
            className="pointer"
          />
          <Link href={"/properties"}>
            <Button ghost>Properties</Button>
          </Link>
        </div>
        <Button icon={<GoogleOutlined />}>Login or Register</Button>
      </div>
      <hr />
      {pathname === "/" && (
        <div className="hero">
          <h1 className="hero-title">
            Finding your <span className="color-sec">perfect home</span>{" "}
          </h1>
          <p className="hero-subtitle">
            <SearchProperties />
          </p>
          {/* Search Box */}
          <Flex justify="center" gap={8}>
            <Link href={"/properties"}>
              <Button>Browse Properties</Button>
            </Link>
            <Button>List Property</Button>
          </Flex>
        </div>
      )}
    </nav>
  );
}
