'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from 'react95';
import { titleCase } from '@/utils/utils';
import { getMovesData } from '../api';
import physicalIcon from '../../../assets/icons/physical_attack.png'
import specialIcon from '../../../assets/icons/special_attack.png'
import statusIcon from '../../../assets/icons/status_attack.png'
import Image from 'next/image';

const TYPES_ICONS = {
    physical: physicalIcon,
    special: specialIcon,
    status: statusIcon
}

function Moves({ pokemonMoves }) {
    const [moveData, setMoveData] = useState()

    useEffect(() => {
        const fetchMoveData = () => {
            let newData = []
            pokemonMoves.map(async (obj) => {
                const result = await getMovesData(obj.move.url);

                newData = [...newData, result]
                setMoveData(newData);
            })
        }
        fetchMoveData()
    }, [])

    return (
        <>
            {moveData && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Power</TableHeadCell>
                            <TableHeadCell>PP</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {moveData.map((obj) => (
                            <TableRow style={{ textAlign: 'center' }}>
                                <TableDataCell>{titleCase(obj.name)}</TableDataCell>
                                <TableDataCell>{obj.power ? obj.power : ' - '}</TableDataCell>
                                <TableDataCell>{obj.pp}</TableDataCell>
                                <TableDataCell>
                                    <Image src={TYPES_ICONS[obj.damage_class.name]} alt={obj.damage_class.name} />
                                </TableDataCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </>
    )
}

export default Moves