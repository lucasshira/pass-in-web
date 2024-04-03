import { Search, MoreHorizontal, ChevronsLeft, ChevronRight, ChevronLeft, ChevronsRight } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { attendees } from '../data/attendees';

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-200" />
          <input className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" type="text" placeholder="Buscar participante..." />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
            </TableHeader >
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow key={attendee.id}>
              <TableCell>
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">{attendee.nome}</span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().locale('pt-br').to(attendee.createAt)}</TableCell>
              <TableCell>{dayjs().locale('pt-br').to(attendee.checkedInAt)}</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando 10 de 228 itens
            </TableCell>
            <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>

            <div className="inline-flex items-center gap-8 ">
              <span>Página 1 de 23</span>
              <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}