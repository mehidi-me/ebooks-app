import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category./Category";
import EbookItems from "../components/EbookItems/EbookItems";
import FilterMenu from "../components/filterMenu/FilterMenu";
import Layout from "../components/layout/Layout";
import Watchlist from "../components/Watchlist/Watchlist";

function Home() {
  //   const ebooks = [
  //     {
  //       id: 1,
  //       catName: "What’s popular?",
  //       subCatList: [
  //         {
  //           id: 1,
  //           name: "Streaming",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           name: "On TV",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "4.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           name: "eBooks",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 5,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 4,
  //           name: "Movies",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       catName: "Free to watch",
  //       subCatList: [
  //         {
  //           id: 1,
  //           name: "Streaming",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           name: "On TV",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "4.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           name: "eBooks",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 5,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 4,
  //           name: "Movies",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       catName: "eBooks",
  //       subCatList: [
  //         {
  //           id: 1,
  //           name: "Streaming",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           name: "On TV",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "4.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           name: "eBooks",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 5,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 4,
  //           name: "Movies",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       catName: "Movies",
  //       subCatList: [
  //         {
  //           id: 1,
  //           name: "Streaming",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           name: "On TV",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "4.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           name: "eBooks",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 5,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 4,
  //           name: "Movies",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       catName: "Story",
  //       subCatList: [
  //         {
  //           id: 1,
  //           name: "Streaming",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           name: "On TV",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "4.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 3,
  //           name: "eBooks",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 5,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //         {
  //           id: 4,
  //           name: "Movies",
  //           ebooks: [
  //             {
  //               id: 1,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 2,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 3,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //             {
  //               id: 4,
  //               title: "this is title",
  //               image: "banner.png",
  //               rating: "3.0",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ];
  return (
    <Layout>
      <Banner
        title="Welcome to the website"
        subTitle="Millions of movies, ebooks, TV shows to discover"
      />

      <main>
        <div className="container-fluid-max">
          <div className="layout">
            <FilterMenu />

            <div className="right">
              <Category />

              {/* <Watchlist /> */}

              <EbookItems />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
