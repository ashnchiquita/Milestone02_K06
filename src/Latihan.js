import React from 'react';
import { Box } from '@material-ui/core';

const Latihan = () => {
    return (
        <>
            <div className="body">
                <box style={{ width: 1100, textAlign: 'center' }} className="latihan">
                    {' '}
                    Latihan{' '}
                </box>
                <div>
                    <h2 style={{ width: 1100, height: 50 }} className="soal">
                        {' '}
                        Hasil dari 12 x 23 ={' '}
                    </h2>
                </div>
                <div>
                    <h3 className="tulisan"> Pilihan Jawaban:</h3>
                </div>
                <Box>
                    <button style={{ width: 1100, textAlign: 'left' }} className="btn">
                        <a href="Jawaban-benar.js">276</a>
                    </button>
                </Box>
                <Box>
                    <button style={{ width: 1100, textAlign: 'left' }} className="btn">
                        <a href="Jawaban-salah-b.js">376</a>
                    </button>
                </Box>
                <Box>
                    <button style={{ width: 1100, textAlign: 'left' }} className="btn">
                        <a href="Jawaban-salah-c.js">256</a>
                    </button>
                </Box>
                <Box>
                    <button style={{ width: 1100, textAlign: 'left' }} className="btn">
                        <a href="Jawaban-salah-d.js">456</a>
                    </button>
                </Box>
            </div>
        </>
    );
};

export default Latihan;
