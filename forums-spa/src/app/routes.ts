import '@angular/router';
import { Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: LatestPostsComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'myposts', component: MyPostsComponent },
            { path: 'ask-question', component: AskQuestionComponent }
            // MYTODO: Write all secured paths here
        ],
    },
    { path: 'latest', component:LatestPostsComponent },
    { path: '**', component: PageNotFoundComponent }
];
