import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  // { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: '', loadChildren: () => import('./components/pages/home-v2/home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/home-v3/home-v3.module').then(m => m.HomeV3Module), data: { breadcrumb: 'Homepage' } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  { path: 'privacy', loadChildren: () => import('./components/pages/privacy/privacy.module').then(m => m.PrivacyModule), data: { breadcrumb: 'Privacy' } },
  // Speakers
  { path: 'speakers', loadChildren: () => import('./components/pages/speakers/speakers.module').then(m => m.SpeakersModule), data: { breadcrumb: 'Speakers' } },
  { path: 'speaker-details/:id', loadChildren: () => import('./components/pages/speaker-details/speaker-details.module').then(m => m.SpeakerDetailsModule), data: { breadcrumb: 'Speakers' } },
  // Events
  { path: 'event', loadChildren: () => import('./components/pages/event/event.module').then(m => m.EventModule), data: { breadcrumb: 'Event' } },
  { path: 'event-details/:id', loadChildren: () => import('./components/pages/event-details/event-details.module').then(m => m.EventDetailsModule), data: { breadcrumb: 'Event Details' } },
  // Pages
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },

  { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  { path: 'shop-details/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: 'Shop Details' } },
  { path: 'shedules', loadChildren: () => import('./components/pages/schedules/schedules.module').then(m => m.SchedulesModule), data: { breadcrumb: 'Schedules' } },
  { path: 'shedules-v2', loadChildren: () => import('./components/pages/schedule-details/schedule-details.module').then(m => m.ScheduleDetailsModule), data: { breadcrumb: 'Schedules v2' } },
  { path: 'sponsors', loadChildren: () => import('./components/pages/sponser/sponser.module').then(m => m.SponserModule), data: { breadcrumb: 'Sponsors' } },
  { path: 'gallery', loadChildren: () => import('./components/pages/gallery/gallery.module').then(m => m.GalleryModule), data: { breadcrumb: 'Gallery' } },
  { path: 'gallery-v2', loadChildren: () => import('./components/pages/gallery-two/gallery-two.module').then(m => m.GalleryTwoModule), data: { breadcrumb: 'Gallery v2' } },
  { path: 'pricing', loadChildren: () => import('./components/pages/pricing/pricing.module').then(m => m.PricingModule), data: { breadcrumb: 'Pricing' } },
  { path: 'faq', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  { path: 'coming-soon', loadChildren: () => import('./components/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule), data: { breadcrumb: 'Coming Soon' } },
  // News
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid-two/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid-two/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-grid-two/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },

  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-list/blog-list.module').then(m => m.BlogListModule), data: { breadcrumb: 'Blog Standard' } },
  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog-grid-v2', loadChildren: () => import('./components/pages/blog-grid-two/blog-grid-two.module').then(m => m.BlogGridTwoModule), data: { breadcrumb: 'Blog Grid 3 Col' } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
