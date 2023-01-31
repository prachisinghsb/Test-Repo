import { useQuery } from "@tanstack/react-query";

export default function getUsers() {
  const {
    isLoading: usersIsLoading,
    data: usersData,
    error: usersError,
  } = useQuery({
    queryKey: ["/users"],
  });

  if (usersIsLoading) {
    return <span> ... Loading </span>;
  }
  if (usersError) {
    return <span> Error : {usersError?.message}</span>;
  }

  return (
    <>
      {usersData.map((users) => (
        <div className="border border-black w-1/2 bg-red-200 m-auto p-8 m-4 ">
          <p>{users?.username}</p>
          <p>{users?.email}</p>
          <p>{users?.username}</p>
        </div>
      ))}
    </>
  );
}
