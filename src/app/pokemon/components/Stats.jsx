import React from 'react'
import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from 'react95';
import { titleCase } from '@/utils/utils';

function Stats({ pokemonData }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Base</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pokemonData.stats.map((obj, index) => (
                    <TableRow key={index} style={{ textAlign: 'center' }}>
                        <TableDataCell style={{ width: '14rem' }}>{titleCase(obj.stat.name)}</TableDataCell>
                        <TableDataCell>{obj.base_stat}</TableDataCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Stats