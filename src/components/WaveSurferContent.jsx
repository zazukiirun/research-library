import React from 'react'
import TrackListContainer from './others/TrackListContainer';
import { fetchTopTracks } from '@/utils/fetchers';

async function WaveSurferContent() {

  // const tracks = await fetchTopTracks({ limit: 10 });

  return (
    <div>
      <div className="text-red-200 underline-offset-1 underline font-medium text-[24px] text-center">
        Wavesurfer
      </div>

      <div className='grid h-full grid-cols-2 grid-rows-3 gap-x-12'>
        <TrackListContainer
          header='Trending right now'
          tracks={[
            {
              "id": 2203061907,
              "title": "Like Crazy",
              "title_short": "Like Crazy",
              "title_version": "",
              "link": "https://www.deezer.com/track/2203061907",
              "duration": 212,
              "rank": 994778,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-8.dzcdn.net/stream/c-893564234d991951de6c67e57c29fbcb-4.mp3",
              "md5_image": "b9b40708dc92c1116ceaa1efa7d1c688",
              "position": 1,
              "artist": {
                "id": 168047437,
                "name": "Jimin",
                "link": "https://www.deezer.com/artist/168047437",
                "picture": "https://api.deezer.com/artist/168047437/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/168047437/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 420450127,
                "title": "FACE",
                "cover": "https://api.deezer.com/album/420450127/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/1000x1000-000000-80-0-0.jpg",
                "md5_image": "b9b40708dc92c1116ceaa1efa7d1c688",
                "tracklist": "https://api.deezer.com/album/420450127/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2192148087,
              "title": "Set Me Free Pt.2",
              "title_short": "Set Me Free Pt.2",
              "title_version": "",
              "link": "https://www.deezer.com/track/2192148087",
              "duration": 200,
              "rank": 988358,
              "explicit_lyrics": true,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-c.dzcdn.net/stream/c-c50c8d28624df18ee46cbdebd0c1bc8a-4.mp3",
              "md5_image": "b9b40708dc92c1116ceaa1efa7d1c688",
              "position": 2,
              "artist": {
                "id": 168047437,
                "name": "Jimin",
                "link": "https://www.deezer.com/artist/168047437",
                "picture": "https://api.deezer.com/artist/168047437/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cb863a8e9a479ec8ba3406cc18c9744b/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/168047437/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 417707727,
                "title": "Set Me Free Pt.2",
                "cover": "https://api.deezer.com/album/417707727/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b9b40708dc92c1116ceaa1efa7d1c688/1000x1000-000000-80-0-0.jpg",
                "md5_image": "b9b40708dc92c1116ceaa1efa7d1c688",
                "tracklist": "https://api.deezer.com/album/417707727/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2523324921,
              "title": "Seven (feat. Latto) (Explicit Ver.)",
              "title_short": "Seven (feat. Latto) (Explicit Ver.)",
              "title_version": "",
              "link": "https://www.deezer.com/track/2523324921",
              "duration": 183,
              "rank": 797911,
              "explicit_lyrics": true,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8302135796a50833260629b827a9dfef-1.mp3",
              "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
              "position": 3,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 507407161,
                "title": "GOLDEN",
                "cover": "https://api.deezer.com/album/507407161/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1000x1000-000000-80-0-0.jpg",
                "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
                "tracklist": "https://api.deezer.com/album/507407161/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2473397771,
              "title": "3D (feat. Jack Harlow)",
              "title_short": "3D (feat. Jack Harlow)",
              "title_version": "",
              "link": "https://www.deezer.com/track/2473397771",
              "duration": 201,
              "rank": 882300,
              "explicit_lyrics": true,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-5.dzcdn.net/stream/c-57068379584f24b69daec1614cbf354f-1.mp3",
              "md5_image": "b04868e04381e39af6b595c6dd5385ce",
              "position": 4,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 493220731,
                "title": "3D (feat. Jack Harlow)",
                "cover": "https://api.deezer.com/album/493220731/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/1000x1000-000000-80-0-0.jpg",
                "md5_image": "b04868e04381e39af6b595c6dd5385ce",
                "tracklist": "https://api.deezer.com/album/493220731/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2523324931,
              "title": "Standing Next to You",
              "title_short": "Standing Next to You",
              "title_version": "",
              "link": "https://www.deezer.com/track/2523324931",
              "duration": 206,
              "rank": 920422,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-9.dzcdn.net/stream/c-92d67493403529e327e9f601ae1c0e12-1.mp3",
              "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
              "position": 5,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 507407161,
                "title": "GOLDEN",
                "cover": "https://api.deezer.com/album/507407161/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1000x1000-000000-80-0-0.jpg",
                "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
                "tracklist": "https://api.deezer.com/album/507407161/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2650393332,
              "title": "Nightwalker",
              "title_short": "Nightwalker",
              "title_version": "",
              "link": "https://www.deezer.com/track/2650393332",
              "duration": 204,
              "rank": 718769,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-2.dzcdn.net/stream/c-28b05bcaf6c79a415837f71ae1cf15c3-1.mp3",
              "md5_image": "c4064c6942dbd9bd4d5e21d6a66d9a2c",
              "position": 6,
              "artist": {
                "id": 180402267,
                "name": "TEN",
                "link": "https://www.deezer.com/artist/180402267",
                "picture": "https://api.deezer.com/artist/180402267/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/3a57fade5760d3511b084ee5393c938d/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/3a57fade5760d3511b084ee5393c938d/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/3a57fade5760d3511b084ee5393c938d/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/3a57fade5760d3511b084ee5393c938d/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/180402267/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 544200502,
                "title": "TEN - The 1st Mini Album",
                "cover": "https://api.deezer.com/album/544200502/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c4064c6942dbd9bd4d5e21d6a66d9a2c/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c4064c6942dbd9bd4d5e21d6a66d9a2c/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c4064c6942dbd9bd4d5e21d6a66d9a2c/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c4064c6942dbd9bd4d5e21d6a66d9a2c/1000x1000-000000-80-0-0.jpg",
                "md5_image": "c4064c6942dbd9bd4d5e21d6a66d9a2c",
                "tracklist": "https://api.deezer.com/album/544200502/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2473397791,
              "title": "3D (Alternate Ver.)",
              "title_short": "3D (Alternate Ver.)",
              "title_version": "",
              "link": "https://www.deezer.com/track/2473397791",
              "duration": 162,
              "rank": 612450,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-c.dzcdn.net/stream/c-cfc33af6b68f18923d8203765af86142-1.mp3",
              "md5_image": "b04868e04381e39af6b595c6dd5385ce",
              "position": 7,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 493220731,
                "title": "3D (feat. Jack Harlow)",
                "cover": "https://api.deezer.com/album/493220731/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b04868e04381e39af6b595c6dd5385ce/1000x1000-000000-80-0-0.jpg",
                "md5_image": "b04868e04381e39af6b595c6dd5385ce",
                "tracklist": "https://api.deezer.com/album/493220731/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2523324941,
              "title": "Yes or No",
              "title_short": "Yes or No",
              "title_version": "",
              "link": "https://www.deezer.com/track/2523324941",
              "duration": 147,
              "rank": 821215,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3633b3a1417fa9075f62cab5154306ac-1.mp3",
              "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
              "position": 8,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 507407161,
                "title": "GOLDEN",
                "cover": "https://api.deezer.com/album/507407161/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1000x1000-000000-80-0-0.jpg",
                "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
                "tracklist": "https://api.deezer.com/album/507407161/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2523324951,
              "title": "Please Don't Change (feat. DJ Snake)",
              "title_short": "Please Don't Change (feat. DJ Snake)",
              "title_version": "",
              "link": "https://www.deezer.com/track/2523324951",
              "duration": 146,
              "rank": 789398,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-f.dzcdn.net/stream/c-fbc38c87ed789244670252bf8d78a321-1.mp3",
              "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
              "position": 9,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 507407161,
                "title": "GOLDEN",
                "cover": "https://api.deezer.com/album/507407161/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1000x1000-000000-80-0-0.jpg",
                "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
                "tracklist": "https://api.deezer.com/album/507407161/tracks",
                "type": "album"
              },
              "type": "track"
            },
            {
              "id": 2523324911,
              "title": "Closer to You (feat. Major Lazer)",
              "title_short": "Closer to You (feat. Major Lazer)",
              "title_version": "",
              "link": "https://www.deezer.com/track/2523324911",
              "duration": 170,
              "rank": 748893,
              "explicit_lyrics": false,
              "explicit_content_lyrics": 0,
              "explicit_content_cover": 0,
              "preview": "https://cdns-preview-a.dzcdn.net/stream/c-af551dfbc6fdf938ded4eaa73becc0cd-1.mp3",
              "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
              "position": 10,
              "artist": {
                "id": 9172904,
                "name": "Jung Kook",
                "link": "https://www.deezer.com/artist/9172904",
                "picture": "https://api.deezer.com/artist/9172904/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/32b1d4df0570439277e798f1aac1746c/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/9172904/top?limit=50",
                "type": "artist"
              },
              "album": {
                "id": 507407161,
                "title": "GOLDEN",
                "cover": "https://api.deezer.com/album/507407161/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5d316d47d96b7c8f5a029dffe1f38981/1000x1000-000000-80-0-0.jpg",
                "md5_image": "5d316d47d96b7c8f5a029dffe1f38981",
                "tracklist": "https://api.deezer.com/album/507407161/tracks",
                "type": "album"
              },
              "type": "track"
            }
          ]}
        />
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default WaveSurferContent