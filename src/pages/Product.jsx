import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Products() {
    return (
        <div className="products">
            <h2>Nos Prothèses</h2>
            <div className="product-list">
                <div className="product-item">
                    <h3>Prothèse XYZ</h3>
                    <p>Description détaillée de la prothèse XYZ...</p>
                    <p>Prix: $20,000</p>
                    <Canvas>
                        {/* Modèle 3D de la prothèse */}
                        <OrbitControls />
                    </Canvas>
                </div>
                {/* Ajouter d'autres prothèses */}
            </div>
            <div className="ar-demos">
                <h3>Démos en Réalité Augmentée</h3>
                <p>Essai virtuel des prothèses via AR...</p>
            </div>
        </div>
    );
}
export default Products;
