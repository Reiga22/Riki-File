import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Alerts() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert variant="success">
      <Alert.Heading>Tulang Bawang</Alert.Heading>
      <p>
      Kabupaten Tulang Bawang adalah salah satu kabupaten yang berada di Provinsi Lampung, Indonesia. Pusat pemerintahan atau ibu kota Tulang Bawang berada di kecamatan Menggala. Kabupaten Tulang Bawang memiliki luas wilayah sebesar 3.466,32 km, dengan penduduk sebanyak 430.021 jiwa.
      </p>
      <hr />
      <p className="mb-0">
      Luas: 4.386 km²
      Kode pos: 345xx dan 346xx
      <p>Kode pos: 345xx dan 346xx
      <p>Provinsi: Lampung
      <p>Ibu kota: Menggala
      <p>APBD: Rp 133.522.000.000.-(2020)
      <p> Dasar hukum: UU RI No. 2 Tahun 1997
      </p>
      </p>
      </p>
      </p>
      </p>
      </p>
    </Alert>
     
    </>
  );
}

export default Alerts;