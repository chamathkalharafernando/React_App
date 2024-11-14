import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Table } from "@mui/material";

const UsersTable = ({ rows,selectedUser,deleteUser }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell>
                                    <button
                                        style={{ margin: '0px 10px' }}
                                        onClick={() => selectedUser({id:row.id,name:row.name})}
                                    >
                                        Update
                                    </button>
                                    <button
                                        style={{ margin: '0px 10px' }}
                                        onClick={() => deleteUser({id:row.id})}
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                No Data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
