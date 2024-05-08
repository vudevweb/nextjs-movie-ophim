import Catalog from "@/components/pages/trang-chu/catalog";
import Slide from "@/components/pages/trang-chu/slide";
import SlideCatalog from "@/components/pages/trang-chu/slideCatalog";

const Home = async () => {
  const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  const newP = await getData("https://ophim1.com/danh-sach/phim-moi-cap-nhat")
  const moiP = await getData("https://ophim1.com/v1/api/danh-sach/phim-moi-nhat")

  const leP = await getData("https://ophim1.com/v1/api/danh-sach/phim-le")
  const boP = await getData("https://ophim1.com/v1/api/danh-sach/phim-bo")
  const sapChieuP = await getData("https://ophim1.com/v1/api/danh-sach/phim-sap-chieu")
  const tvS = await getData("https://ophim1.com/v1/api/danh-sach/tv-shows")
  const anime = await getData("https://ophim1.com/v1/api/danh-sach/hoat-hinh")


  const movies = [
    {...leP.data},
    {...boP.data},
    {...anime.data},
    {...tvS.data},
    {...sapChieuP.data}, 
  ]


  return (
    <>
      <Slide data={moiP.data}/>
      {movies.map((data, index) => (
        <SlideCatalog key={index} data={data}/>
      ))}
      <Catalog data={newP.items.slice(0,6)} uImg={newP.pathImage}/>
    </>
  );
}

export default Home
