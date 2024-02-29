import { Filter, MoreHorizontal, Search } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./components/header";
import LanguageDropdown from "./components/language-dropdown";
import { Tabs } from "./components/tabs";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Control, Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

export const App: React.FC = () => {
  const { t } = useTranslation();

  interface DataArrayItem {
    name: string;
    email: string;
    phone: string;
    password: string;
    rg: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    age: string;
  }

  const dataArray1: DataArrayItem[][] = [
    [
      {
        name: "Card 1",
        email: "email1@example.com",
        phone: "12312312312",
        password: "pass123",
        rg: "123456789",
        address: "123 Main St",
        city: "City A",
        country: "Country X",
        postalCode: "12345",
        age: "25",
      },
      {
        name: "Card 2",
        email: "email2@example.com",
        phone: "12312312312",
        password: "pass456",
        rg: "987654321",
        address: "456 Elm St",
        city: "City B",
        country: "Country Y",
        postalCode: "67890",
        age: "30",
      },
      {
        name: "Card 3",
        email: "email3@example.com",
        phone: "12312312312",
        password: "pass789",
        rg: "456789123",
        address: "789 Oak St",
        city: "City C",
        country: "Country Z",
        postalCode: "54321",
        age: "35",
      },
      {
        name: "Card 4",
        email: "email4@example.com",
        phone: "12312312312",
        password: "passabc",
        rg: "789123456",
        address: "987 Pine St",
        city: "City D",
        country: "Country W",
        postalCode: "09876",
        age: "40",
      },
    ],
    [
      {
        name: "Card 5",
        email: "email5@example.com",
        phone: "12312312312",
        password: "passxyz",
        rg: "321654987",
        address: "654 Maple St",
        city: "City E",
        country: "Country V",
        postalCode: "56789",
        age: "45",
      },
      {
        name: "Card 6",
        email: "email6@example.com",
        phone: "12312312312",
        password: "pass123",
        rg: "654987321",
        address: "321 Cedar St",
        city: "City F",
        country: "Country U",
        postalCode: "23456",
        age: "50",
      },
      {
        name: "Card 7",
        email: "email7@example.com",
        phone: "12312312312",
        password: "pass456",
        rg: "987321654",
        address: "159 Birch St",
        city: "City G",
        country: "Country T",
        postalCode: "76543",
        age: "55",
      },
      {
        name: "Card 8",
        email: "email8@example.com",
        phone: "12312312312",
        password: "pass789",
        rg: "321987654",
        address: "753 Walnut St",
        city: "City H",
        country: "Country S",
        postalCode: "43210",
        age: "60",
      },
    ],
  ];

  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tabs
          uploads={t("tabs.uploads")}
          tags={t("tabs.tags")}
          settings={t("tabs.settings")}
          developers={t("tabs.developers")}
        />
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input variant="filter">
              <Search className="size-3" />
              <Control placeholder="Search tags..." />
            </Input>
            <Button type="submit">
              <Filter className="size-3" />
              {t("filter.apply")}
            </Button>
          </form>

          <LanguageDropdown />
        </div>

        {/* TABELA */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>{t("table.first_column")}</TableHead>
              <TableHead>{t("table.second_column")}</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">ABC</span>
                  <span className="text-xs text-zinc-500">ABC</span>
                </div>
              </TableCell>
              <TableCell className="text-zinc-300">12 video(s)</TableCell>
              <TableCell className="text-right">
                <Button size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">CBA</span>
                  <span className="text-xs text-zinc-500">CBA</span>
                </div>
              </TableCell>
              <TableCell className="text-zinc-300">12 video(s)</TableCell>
              <TableCell className="text-right">
                <Button size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="justify-end flex">
          <Badge variant="primary">{t("language")}</Badge>
        </div>
        {/* <MapContainer /> */}
        <Card dataArray={dataArray1} />
      </main>

      {/* EXEMPLO BASICO */}
      {/* <h1>{t('header')}</h1>
      <footer>{t('footer', {
        year: new Date().getFullYear()
      })}</footer>
      <button type='button' onClick={handleChangeLanguage}>{t('button.language')}</button> */}
    </div>
  );
};
