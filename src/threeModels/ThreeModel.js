import { GltfLoader } from '../utils/GltfLoader'


//MATERIALS
import { Cristal } from '../materials/Cristal'

export class ThreeModel {
    GltfLoader = GltfLoader
    //Materials
    cristal = new Cristal

    lifePoints
    color
    scene

    renderOnGroup(group, loadAsChild = this.GltfLoader.loadAsChild){
        loadAsChild(group, this.glbPath, [this,'scene'], this.middlewares)
    }
}