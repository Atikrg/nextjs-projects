import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meal-grid';
import { getMeals } from '@/lib/meals';
import { notFound } from 'next/navigation';


export const metadata = {
      title: "All meals",
      description: "Browse the delicious meals shared by our vibrant community"
}


export default async function MealsPage() {
      const meals = await getMeals();

      if (!meals)
      {
            notFound();
      }

      return (
            <>
                  <header className={classes.header}>
                        <h1>
                              Delicious meals, created{' '}
                              <span className={classes.highlight}>by you</span>
                        </h1>
                        <p>
                              Choose your favorite recipe and cook it yourself. It is easy and fun!
                        </p>
                        <p className={classes.cta}>
                              <Link href="/meals/share">
                                    Share Your Favorite Recipe
                              </Link>
                        </p>
                  </header>
                  <main className={classes.main}>
                        <MealsGrid meals={meals} />
                  </main>
            </>
      );
}