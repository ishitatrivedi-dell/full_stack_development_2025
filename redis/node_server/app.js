

await redis.hset("user:123", {
    name: "Alice",
    email: "alice@example.com",
    age: 30,
  });
  console.log("User saved!");


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});