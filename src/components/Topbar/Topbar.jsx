import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Input, Button, Space } from "antd";
import logo from "../../assets/logo.png";
import { SearchOutlined } from "@ant-design/icons";
import "../Topbar/Topbar.css";
import "antd/dist/reset.css";

const { Search } = Input;

const elements = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Movies",
    key: "/movies",
  },
  {
    label: "TV series",
    key: "/tvSeries",
  },
];

const Topbar = () => {
  const navigate = useNavigate();
  const [isHovering, setHovering] = useState(false);
  const [isSearchButtonBG, setSearchButtonBG] = useState("transparent");
  const [searchIconColor, setSearchIconColor] = useState("redPrimary");
  const [roundedL, setRoundedL] = useState("sm");

  return (
    <section className="flex Topbar items-center">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-16 flex-none" />

      {/* Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        items={elements}
        className="flex-1 font-Prompt text-[18px] leading-inherit ml-5 bg-transparent gap-16 pl-52"
        onClick={({ key }) => {
          navigate(key);
        }}
      />

      {/* Search */}

      <Space className="h-fit pr-5 relative flex gap-0">
        {isHovering && (
          <span className="">
            <Input
              placeholder="Search movies, tv series..."
              onPressEnter={() => {
                setHovering(false);
                setSearchButtonBG("transparent");
                setSearchIconColor("redPrimary");
                setRoundedL("sm");
              }}
              className=" text-base rounded-r-none border-r-0 border-redPrimary bg-black placeholder:text-white text-white"
            />
          </span>
        )}
        <span>
          <Button
            icon={<SearchOutlined className="align-[0px]" />}
            className={`h-fit rounded-l-${roundedL} border-transparent text-base text-${searchIconColor} bg-${isSearchButtonBG} hover:text-white hover:bg-redPrimary hover:border-redPrimary`}
            onClick={() => {
              isHovering ? setHovering(false) : setHovering(true);
              searchIconColor === "redPrimary"
                ? setSearchIconColor("white")
                : setSearchIconColor("redPrimary");
              roundedL === "sm" ? setRoundedL("none") : setRoundedL("sm");
              isSearchButtonBG === "transparent"
                ? setSearchButtonBG("redPrimary")
                : setSearchButtonBG("transparent");
            }}
          />
        </span>
      </Space>

      {/* Button Sign In */}
      <Button className="m-4 font-Prompt bg-redPrimary text-white font-bold border-redPrimary border-2 hover:bg-white hover:text-redPrimary ">
        SIGN IN
      </Button>
    </section>
  );
};

export default Topbar;
