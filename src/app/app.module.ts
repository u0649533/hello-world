import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveFileComponent } from './archive-file/archive-file.component'; 
import { MyGuardGuard } from './my-guard.guard';
import { ArchiveFileChildComponent } from './archive-file-child/archive-file-child.component';
import {ResolverService} from './resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    ArchiveFileComponent,
    ArchiveFileChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostsComponent, resolve: {archiveList: ResolverService},
      children: [{path: 'archiveDetail', component: ArchiveFileChildComponent }]},
      {path: 'archive', component: ArchiveComponent, canActivate: [MyGuardGuard],
      children: [{path: 'archiveDetail', component: ArchiveFileChildComponent }]},
      {path: 'archiveFile/:month/:year', component: ArchiveFileComponent, canActivate: [MyGuardGuard]},
      {path: '**', component: NotFoundComponent},

    ])
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    MyGuardGuard,
    ResolverService,

    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
