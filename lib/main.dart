import 'package:flutter/material.dart';
import 'package:page_flip/page_flip.dart';

void main() => runApp(const DigitubApp());

class DigitubApp extends StatelessWidget {
  const DigitubApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: const BookViewer(),
    );
  }
}

class BookViewer extends StatefulWidget {
  const BookViewer({Key? key}) : super(key: key);

  @override
  State<BookViewer> createState() => _BookViewerState();
}

class _BookViewerState extends State<BookViewer> {
  // Sesuai dokumentasi versi 0.2.5, pengontrol menggunakan GlobalKey<PageFlipState>
  final _controller = GlobalKey<PageFlipState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1C1C1E),
      body: SafeArea(
        child: Center(
          child: Container(
            margin: const EdgeInsets.all(12.0),
            child: AspectRatio(
              aspectRatio: 3 / 4,
              // Menggunakan nama widget utama 'PageFlip' sesuai struktur versi stabil
              child: PageFlip(
                key: _controller,
                children: <Widget>[
                  _page('File/Gambar/Buku/A.png'),
                  _page('File/Gambar/Buku/B.png'),
                  _page('File/Gambar/Buku/C.png'),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _page(String imgPath) {
    return Container(
      color: Colors.white,
      width: double.infinity,
      height: double.infinity,
      child: Image.asset(
        imgPath, 
        fit: BoxFit.fill,
        errorBuilder: (context, error, stackTrace) {
          return Center(
            child: Text(
              'Gambar tidak ditemukan:\n$imgPath',
              textAlign: TextAlign.center,
              style: const TextStyle(color: Colors.red),
            ),
          );
        },
      ),
    );
  }
}
