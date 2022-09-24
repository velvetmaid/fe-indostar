import React from "react";
import {
  Container,
  ContainerWrap,
  ImgShadow,
  WrapperFlex,
} from "../../styled/StyledComponents";
import "./Product.css";

function Product() {
  return (
    <>
      <Container>
        <ContainerWrap>
          <div className="wrapper">
            <h1>FITUR UNGGULAN AL-QUR'AN CUSTOM</h1>
            <h1>AL-QUR'AN HAFALAN MUDAH</h1>
            <div className="wrapper-img">
              <ImgShadow src="images/Isi 111/full page.png" alt="Hafalan" />
            </div>
            <WrapperFlex>
              <div className="text-product">
                <h2>Spesifikasi Produk</h2>
                <p>
                  ~Hard Cover ~Ukuran A5(21,5 x 15,8 cm) ~Kertas Quran Paper
                  Premium
                </p>
                <p>
                  Al-Qur'an ini dilengkapi dengan panduan hafaan dan barbagai
                  fitur menarik sebagai penunjang proses hafalan seperti kotak
                  kontrol, kata kunci berupa potongan awal dan akhir ayat,
                  motivasi dalam mengahafal Al-Qur'an, Terjemah standar KEMENAG
                  RI
                </p>
              </div>
            </WrapperFlex>
          </div>
        </ContainerWrap>
      </Container>
      {SpecificationProduct()}
      {ProductSecond()}
      {ProductThird()}
      {SpecificationProductLast()}
    </>
  );

  function SpecificationProduct() {
    return (
      <Container>
        <ContainerWrap>
          <WrapperFlex>
            <div className="row">
              <div className="column">
                <h2>1. Metode Hafalan 5 Waktu</h2>
                <img
                  src="images/Isi 111/metodehafalan.png"
                  alt="Metode Hafalan"
                />
                <p>
                  Dilengkapi dengan Metode Hafalan 5 Waktu yang dapat membantu
                  kita dalam menghafal
                </p>
              </div>
              <div className="column-strip-pl">
                <h2>2. Motivasi Hafalan</h2>
                <img
                  src="images/Isi 111/motivasi hafalan.png"
                  alt="Motivasi Hafalan"
                />
                <p>
                  Terdapat Motivasi dalam menghafal Al-Qur'an disetiap
                  halamannya
                </p>
              </div>
              <div className="column-strip-pr">
                <h2>3. Tema Ayat</h2>
                <img src="images/Isi 111/tema ayat.png" alt="Tema Ayat" />
                <p>Tema Ayat pada setiap halamannya</p>
              </div>
              <div className="column">
                <h2>4. Terjemah</h2>
                <img src="images/Isi 111/terjemah.png" alt="Terjemah" />
                <p>
                  Terjemah Standar <strong>KEMENAG RI</strong>
                </p>
              </div>
            </div>
          </WrapperFlex>
        </ContainerWrap>
      </Container>
    );
  }

  function ProductSecond() {
    return (
      <Container className="strip">
        <ContainerWrap>
          <div className="wrapper">
            <h1>AL-QUR’AN STANDAR MADINAH</h1>
            <div className="wrapper-img">
              <ImgShadow
                src="images/kode isi 601/16. Quran Madinah.png"
                alt="Hafalan"
              />
            </div>
            <WrapperFlex>
              <div className="text-product">
                <h2>Spesifikasi Produk</h2>
                <p>
                  ~Hard Cover ~Ukuran A6(17,1 x 12,8 cm) ~Kertas Quran Paper
                  Premium
                </p>
                <p>
                  Al-Qur'an madinah dengantampilan full page yang dapat
                  memudahkan kita dalam membacanya
                </p>
              </div>
            </WrapperFlex>
          </div>
        </ContainerWrap>
      </Container>
    );
  }

  function ProductThird() {
    return (
      <Container>
        <ContainerWrap>
          <div className="wrapper">
            <h1>AL-QUR’AN TAJWID WARNA</h1>
            <div className="wrapper-img">
              <ImgShadow
                src="images/Kode isi 801/17. Al- Quddus A6.png"
                alt="Hafalan"
              />
            </div>
            <WrapperFlex>
              <div className="text-product">
                <h2>Spesifikasi Produk</h2>
                <p>
                  ~Hard Cover ~Ukuran A6(15,2 x 11,4 cm) ~Kertas Quran Paper
                  Premium
                </p>
                <p>
                  Al-Qur'an dengan tampilan penuh dibantu dengan tanda tajwid
                  warna memudahkan kita dalam membaca Al-Qur'an
                </p>
              </div>
            </WrapperFlex>
          </div>
        </ContainerWrap>
      </Container>
    );
  }

  function SpecificationProductLast() {
    return (
      <Container>
        <ContainerWrap>
          <WrapperFlex>
            <div className="row">
              <div className="column">
                <h2>1. Tajwid Warna</h2>
                <img src="images/Kode isi 801/tajwid warna.png" alt="Tajwid Warna" />
                <p>
                  Dilengkapi dengan Tajwid warna yang memudahkan kita dalam
                  membaca
                </p>
              </div>
              <div className="column-strip-pl">
                <h2>2. Petunjuk Tajwid</h2>
                <img src="images/Kode isi 801/Petunjuk Tajwid.png" alt="Petunjuk Tajwid" />
                <p>
                  Dilengkapi dengan petunjuk Tajwid yang memudahkan kita dalam
                  membaca sesuai hukum Tajwid
                </p>
              </div>
            </div>
          </WrapperFlex>
        </ContainerWrap>
      </Container>
    );
  }
}

export default Product;
