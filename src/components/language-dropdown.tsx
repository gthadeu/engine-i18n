import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Languages } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const LanguageDropdown: React.FC = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const currentLanguage = language;

  const handleChangeLanguage = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>
          <Languages className="size-4" />
          {currentLanguage.toUpperCase()}
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-zinc-900 border-zinc-900 rounded-md text-center text-zinc-300">
        <DropdownMenu.Item
          className="py-1.5 px-2.5 text-xs flex gap-2 cursor-pointer"
          onSelect={() => handleChangeLanguage("en")}
        >
          <img
            src="../public/assets/united-states.png"
            className="size-4"
          ></img>
          {t("English")}
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="py-1. text-xs px-2.5 flex gap-2 cursor-pointer"
          onSelect={() => handleChangeLanguage("pt")}
        >
          <img src="../public/assets/brazil.png" className="size-4"></img>
          {t("Portuguese")}
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="py-1.5 px-2.5 text-xs flex gap-2 cursor-pointer"
          onSelect={() => handleChangeLanguage("es")}
        >
          <img src="../public/assets/spain.png" className="size-4"></img>
          {t("Spanish")}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LanguageDropdown;
