import RegionPicture from './regionPicture'
import Activity from './activity'
import Period from './period'
import Season from './season'

export default ({trip}) => (
    <nav class="level ">
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Région</p>
            <p class="title is-5"><RegionPicture region={trip.region} /></p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Activité</p>
            <p class="title"><Activity activity={trip.activity} /></p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Durée</p>
            <p class="title is-5"><Period period={trip.period} /></p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Saison</p>
            <p class="title"><Season season={trip.season}/></p>
            </div>
        </div>
    </nav>
)
