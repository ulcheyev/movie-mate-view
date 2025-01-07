import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  createWatchlist,
  getAllWatchlists,
  WatchlistDto,
} from "@/api/watchlist";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WatchlistPage = () => {
  const [form, setForm] = useState({
    name: "",
    moviesId: [""],
  });
  const [wats, setWats] = useState<WatchlistDto[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllWatchlists({});

      setWats(res.data);
    };
    fetch();
  }, []);

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    createWatchlist(form).then((res) => {
      setWats((prevWats) => [...prevWats, res.data]);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <>
      <div className="text-4xl font-extrabold mb-4">Your watchlists:</div>
      <div>
        <form>
          <div className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Watchlist"
                  onChange={handleInputChange}
                />
                <Button onClick={handleCreate}>Create watchlist</Button>
              </div>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-5 gap-3 mt-8">
          {wats?.map((wat) => (
            <Link to={`/watchlist/${wat.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{wat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Creation date:{" "}
                    {new Date(wat.dateCreated).toISOString().split("T")[0]}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchlistPage;
