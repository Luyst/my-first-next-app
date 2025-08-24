Next task:
+ làm lại card
+ container card để chứa gồm title+ data


fake data
   const cities = [
        "HoChiMinh",
        "HaNoi",
        "DaNang",
        "HoiAn",
        "VungTau",
        "Bangkok",
        "Seoul",
        "HaLong",
        "PhuQuoc",
        "Singapore"
    ];

    const images = [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1414326477014483040/original/0099d0f2-d575-4998-a98e-d11bc47af3ea.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1176111050980920305/original/c6de3670-ad6a-4ebe-81d5-3c0ee5fd156c.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1396886973804448786/original/af4245e7-5bbf-4072-b067-e01ac6baf259.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1437504524802187182/original/adc0a5cf-0571-4fdc-b4cb-b33a63e64276.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQwOTE5MjI1MzUzMDMyNDI4MQ==/original/71134118-5e52-4635-a321-bbaf66ab86ad.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/b81f0200-baae-41d3-bcf2-afe427097882.jpg?im_w=480",
        "https://a0.muscache.com/im/pictures/d785e217-9339-4d02-9fb0-9c6fe102bb8d.jpg?im_w=480",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1218723410519238125/original/71b9b3ca-c82d-49a4-b408-d8bd7a4d54c6.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1353659801042006667/original/a5c94d76-fdc5-4ad4-a845-ee768c4ccce8.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/miso/Hosting-579318425692732868/original/31c6fc98-7f55-472c-9eea-9159b2e44557.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1399726006725237532/original/353598ac-2a79-468c-9dc7-d192152b7c8d.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/ee625cad-eb00-4272-8f77-d1b0f7aaf3fe.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA4MDA1OTA2NDkwMzU5MDQ1Mw%3D%3D/original/0270cd9b-d37d-4ddc-a203-c331d0e11b36.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/d7688852-ff1a-4d9a-a5af-3a896566da52.jpg?im_w=480",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMxMjEyMTYzMDQ2Mzc5NTA4Mg%3D%3D/original/b2918006-2864-4f79-8a95-f9729ab7c038.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/miso/Hosting-820674519056107556/original/5500478a-27fd-498c-85f8-5f6d8df368c9.jpeg?im_w=480",
        "https://a0.muscache.com/im/pictures/6fe4762a-546f-4187-a6c1-040385961e2f.jpg?im_w=480"
    ];


    const types = ["Apartment", "Flat", "House", "Villa", "Condo", "Studio", "Loft", "Bungalow"];
    const tags = ["Guest Favourite"];

    function randomChoice(arr: Array<string>) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const sections = cities.map(city => ({
        id: city.toLowerCase(),
        title: `Popular places to stay in ${city.replace(/([A-Z])/g, ' $1').trim()}`,
        listings: Array.from({ length: 8 }, (_, i) => ({
            id: `${city.toLowerCase()}_room_${String(i + 1).padStart(3, '0')}`,
            title: `${randomChoice(["Cozy", "Modern", "Luxury", "Seaside", "Charming"])} ${randomChoice(types)} in ${city.replace(/([A-Z])/g, ' $1').trim()}`,
            type: randomChoice(types),
            city: city.replace(/([A-Z])/g, ' $1').trim(),
            pricePerNight: Math.floor(Math.random() * 150) + 40,
            currency: "USD",
            rating: (Math.random() * 1 + 4).toFixed(2),
            images: [randomChoice(images)],
            tags: [randomChoice(tags)]
        }))
    }));

    console.log(JSON.stringify({ sections }, null, 2));