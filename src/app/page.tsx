import { getData } from "@/actions/todosAction";
import Todos from "@/components/Todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
