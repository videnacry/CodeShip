import { PropulsionEngine } from './PropulsionEngine.js'

export class BirdPE extends PropulsionEngine {
    glbPath = '3d/propulsion_Engine/BirdPE.glb'

    constructor(p_position, p_rotation, p_color = 'grey', p_lifePoints = 100) {
        super()
        this.position = p_position
        this.rotation = p_rotation
        this.lifePoints = p_lifePoints
        this.color = p_color
    }

}