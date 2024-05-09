import XemPhim from "@/components/pages/xem-phim/xemPhim";
const Page = async ({ params, searchParams }) => {
     const api = "https://ophim1.com/phim/"
     const slug = params.slug;
     const server = searchParams.server;
     const tap = searchParams.tap;

     const res = await fetch(api+slug)
     const data = await res.json()
     console.log(data);
     return (
          <XemPhim data={data} server={server} tap={tap}/>
     )
}

export default Page;