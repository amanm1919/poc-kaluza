import { useEffect, useState } from 'react';
import './AccountSummary.css'
import { Box, Button, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material';
import type { AccountData } from '../../Common/Interfaces/AccountInterface';
function AccountSummary() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<AccountData | null>(null);
    useEffect(() => {
        setTimeout(() => {
            setData({
                balance: 24580.75,
                accountNumber: "AC987654321",
                planName: "Premium Gold",
            });
            setLoading(false);
        }, 2000);
    }, []);
    
    return (
        <>
            <Card
                sx={{
                    minWidth: 350,
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            >
                <CardContent>
                    {loading ? (
                        <>
                            <Skeleton variant="text" width="60%" height={40} />
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width="50%" />
                        </>
                    ) : (
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Current Balance
                            </Typography>

                            <Typography
                                variant="h4"
                                color="primary"
                                fontWeight="bold"
                                gutterBottom
                            >
                                ₹ {data?.balance.toLocaleString()}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Account No: {data?.accountNumber}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Plan: {data?.planName}
                            </Typography>
                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={() => window.location.href = "/statement"}
                                >
                                    View Statement
                                </Button>
                            </CardActions>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default AccountSummary