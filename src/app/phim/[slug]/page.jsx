import Phim from "@/components/pages/phim/phim";

const Page = async ({ params }) => {
     const url = "https://ophim1.com/phim/"
     const slug = params.slug
     const res = await fetch(url+slug)
     const data = await res.json()
     return (
          <Phim data={data}/>
     )
}

export default Page