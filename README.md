# Mini Project!

Mini Project yang dibuat adalah mencoba mendesain ulang tampilan website Official JKT48. Website yang dibuat ini mengambil referensi dari website Official JKT48 yang ada. Akan tetapi dibuat dengan menggunakan React JS, dan tidak sama dengan website aslinya. Ada beberapa fitur yang tidak diterapkan, dikarena keterbatasan kemampuan saat ini untuk mengimplementasikannya. Fitur-fitur yang dibuat antara lain seperti, penggunaan React Router Link, untuk berpindah antar menu, GET data dari hasura, dan juga membuat detail data, yang mana datanya juga distore di dalam hasura. <br><br>

Beberapa problem dialami seperti pendesain-an tampilan yang responsive, logic, dan pengimplementasian desain. Akan tetapi dapat diselesaikan dengan membaca beberapa referensi yang ada di Internet.<br><br>

## Detail Menu Home pada Website
Pada menu Home terdapat header/navbar yang diterapkan kepada semua menu (kecuali Shop), serta konten seperti beberapa news yang bisa dilihat pada laman ini, dan terdapat tombol selengkapnya yang akan mengarahkan user ke menu News.

![This is an image](./screenshot/home%20menu/2022-05-16%20(24).png)

## Detail Menu News pada Website
Pada menu News, user dapat melihat news yang ada pada website ini. Dan bila diklik judul laman tersebut, akan ter-referensi news yang bersangkutan langsung ke laman/website Official JKT48. 

![This is an image](./screenshot/news%20menu/2022-05-16%20(16).png)

## Detail Menu Members pada Website
Pada menu Members, di sini user dapat melihat foto pada member. Untuk pengguna ber-pixel 390px hingga tablet, klik name card yang ada pada web. Sehingga akan ada animasi flip untuk menampilkan foto member yang bersangkutan. Dan bila gambar diklik kembali, akan mengarahkan pengguna untuk melihat detail dari member yang diklik. Untuk pengguna PC, user dapat melihat gambar dengan menghover cursor pada name card, sehingga akan menganimasikan flip pada objek gambar. Dan bila klik gambar, maka akan dialihkan juga ke laman detail member yang diklik. Tambahan, karena menu ini mengambil data dari server yakni Hasura. Menu akan mengalami loading, saat loading memiliki animasi loadingnya juga loh !!<br><br>

## Animasi Loading

![This is an image](./screenshot/list_members%20screenshots/2022-05-17%20(2).png)<br><br>

## Tampilan Menu Members

![This is an image](./screenshot/list_members%20screenshots/2022-05-16%20(15).png)<br><br>

## Menampilkan Foto Para Member

![This is an image](./screenshot/list_members%20screenshots/2022-05-17%20(3).png)<br><br>


## Menampilkan Laman Detail Member

![This is an image](./screenshot/detail_members%20screenshots/2022-05-16%20(11).png)<br><br>

Pada menu Shop, user akan diarahkan langsung ke Official Store JKT48 di Tokopedia. User akan kembali ke website mini project ini, dengan menekan tombol back pada device masing-masing.<br><br>

## Menu Shop akan mengarahkan user ke Toko Online Official !!

![This is an image](./screenshot/menu%20shop/2022-05-17%20(5).png)

Aplikasi ini mulai responsive dari 390px (iPhone 12 Pro), tablet, PC 1024px, hingga PC 1440px. Aplikasi ini masih jauh dari sempurna, dikarenakan keterbasan kemampuan dalam penyelesaiannya.<br><br>

## Tampilan pada Device iPhone 12 Pro (390px)

![This is an image](./screenshot/detail_members%20screenshots/2022-05-16%20(7).png)<br><br>


## Tampilan pada Device Tablet (768px)

![This is an image](./screenshot/detail_members%20screenshots/2022-05-16%20(8).png)<br><br>

## Tampilan pada Device PC (1024px)

![This is an image](./screenshot/detail_members%20screenshots/2022-05-16%20(10).png)<br><br>

## Tampilan pada Device PC (1440px)

![This is an image](./screenshot/detail_members%20screenshots/2022-05-16%20(11).png)