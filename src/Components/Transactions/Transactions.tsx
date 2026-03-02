import { Card, CardContent, Typography, Skeleton, Box, List, ListItem, ListItemText, Divider, IconButton, Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Transaction } from "../../Common/Interfaces/AccountInterface";

function Transactions() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    setTimeout(() => {
      setTransactions([
        {
          id: 1,
          date: "2026-02-15",
          description: "Amazon Purchase",
          amount: -2500,
        },
        {
          id: 2,
          date: "2026-02-10",
          description: "Salary Credit",
          amount: 45000,
        },
        {
          id: 3,
          date: "2026-01-28",
          description: "Electricity Bill",
          amount: -1800,
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const groupedTransactions = transactions.reduce((acc, txn) => {
    const date = new Date(txn.date);
    const month = date.toLocaleString("default", { month: "long", year: "numeric" });
    if (!acc[month]) acc[month] = [];
    acc[month].push(txn);
    return acc;
  }, {} as Record<string, typeof transactions>);

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate("/")} > ← Back </Button>
        <Card sx={{ mt: 3, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Past Transactions
            </Typography>

            {loading ? (
              <>
                <Skeleton variant="text" height={40} />
                <Skeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
                <Skeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
                <Skeleton variant="rectangular" height={60} />
              </>
            ) : transactions.length === 0 ? (
              <Typography color="text.secondary">
                No transactions found.
              </Typography>
            ) : (
              Object.keys(groupedTransactions).map((month) => (
                <Box key={month} sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mt: 2 }}
                  >
                    {month}
                  </Typography>

                  <List>
                    {groupedTransactions[month].map((txn) => (
                      <Fragment key={txn.id}>
                        <ListItem
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <ListItemText
                            primary={txn.description}
                            secondary={new Date(txn.date).toLocaleDateString()}
                          />
                          <Typography
                            color={txn.amount < 0 ? "error.main" : "success.main"}
                            fontWeight="bold"
                          >
                            {txn.amount < 0 ? "-" : "+"}₹
                            {Math.abs(txn.amount).toLocaleString()}
                          </Typography>
                        </ListItem>
                        <Divider />
                      </Fragment>
                    ))}
                  </List>
                </Box>
              ))
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Transactions;