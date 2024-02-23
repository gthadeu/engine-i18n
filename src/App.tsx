import { Filter, Languages, MoreHorizontal, Search } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/header';
import { Tabs } from './components/tabs';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Control, Input } from './components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

export const App: React.FC = () => {
  const {t, i18n: {changeLanguage, language}} = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    let newLanguage;
    switch (currentLanguage) {
      case 'en':
        newLanguage = 'pt';
        break;
      case 'pt':
        newLanguage = 'es'; 
        break;
      case 'es':
        newLanguage = 'en'; 
        break;
      default:
        newLanguage = 'en'; 
    }
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  return (
    <div className='py-10 space-y-8'>
     <div>
     <Header/>
      <Tabs uploads={t('tabs.uploads')} tags={t('tabs.tags')} settings={t('tabs.settings')} developers={t('tabs.developers')}/>
     </div>
     <main className='max-w-6xl mx-auto space-y-5'>
     <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input variant='filter'>
              <Search className="size-3" />
              <Control 
                placeholder="Search tags..." 
              />
            </Input>
            <Button type="submit">
              <Filter className="size-3" />
              {t('filter.apply')}
            </Button>
          </form>

          <Button onClick={handleChangeLanguage}>
            <Languages className="size-3" />
            Change Language
          </Button>
        </div>
     
     <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>{t('table.first_column')}</TableHead>
              <TableHead>{t('table.second_column')}</TableHead>
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
                  <TableCell className="text-zinc-300">
                    12 video(s)
                  </TableCell>
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
                  <TableCell className="text-zinc-300">
                    12 video(s)
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </TableCell>
                  </TableRow>
          </TableBody>
      </Table>
     <div className='justify-end flex'>
      <Badge variant='primary'>{t('language')}</Badge>
     </div>
     </main>
      {/* EXEMPLO BASICO */}
      {/* <h1>{t('header')}</h1>
      <footer>{t('footer', {
        year: new Date().getFullYear()
      })}</footer>
      <button type='button' onClick={handleChangeLanguage}>{t('button.language')}</button> */}
    </div>
  );
}

