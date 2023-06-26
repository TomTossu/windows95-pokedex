import React from 'react'
import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from 'react95';
import { titleCase } from '@/utils/utils';

function Abilities({ pokemonData }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Slot</TableHeadCell>
                    <TableHeadCell>Hidden</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pokemonData.abilities.map((obj, index) => (
                    <TableRow key={index} style={{ textAlign: 'center' }}>
                        <TableDataCell>{titleCase(obj.ability.name)}</TableDataCell>
                        <TableDataCell>{obj.slot}</TableDataCell>
                        <TableDataCell>{obj.is_hidden ? 'Yes' : 'No'}</TableDataCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Abilities