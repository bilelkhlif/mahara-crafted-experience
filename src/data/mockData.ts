import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";
import ceramics from "@/assets/services/ceramics.jpg";
import webdev from "@/assets/services/webdev.jpg";

export const avatars = { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 };
export const serviceImages = { ceramics, webdev };

export interface User {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  completedJobs: number;
  verified: boolean;
  hourlyRate: number;
  bio: string;
  skills: string[];
  badges: string[];
}

export interface Message {
  id: string;
  from: User;
  preview: string;
  time: string;
  unread: boolean;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
  status: "completed" | "pending" | "escrow";
  method: string;
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  budget: number;
  category: string;
  postedBy: User;
  postedAt: string;
  proposals: number;
  deadline: string;
  skills: string[];
}

export interface Order {
  id: string;
  title: string;
  provider: User;
  client: User;
  amount: number;
  status: "active" | "completed" | "disputed" | "delivered";
  date: string;
  dueDate: string;
}

export interface Review {
  id: string;
  from: User;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  client: string;
  date: string;
  time: string;
  duration: string;
  type: "tutoring" | "consultation" | "delivery";
}

export const providers: User[] = [
  {
    id: "p1", name: "Amira Ben Ali", avatar: avatar1,
    title: "Tutrice de Mathématiques & Physique",
    location: "Tunis, La Marsa", rating: 4.9, reviews: 127, completedJobs: 243, verified: true,
    hourlyRate: 45, bio: "Diplômée de l'ENIT avec 5 ans d'expérience en tutorat. Spécialisée en préparation au bac et concours d'entrée.",
    skills: ["Mathématiques", "Physique", "Préparation Bac", "Cours en ligne"],
    badges: ["Top Rated", "Réponse rapide", "100+ missions"]
  },
  {
    id: "p2", name: "Khalil Mrad", avatar: avatar2,
    title: "Développeur Web Full Stack",
    location: "Sousse", rating: 4.8, reviews: 89, completedJobs: 156, verified: true,
    hourlyRate: 65, bio: "Expert React/Node.js avec un portfolio de 50+ projets pour des startups tunisiennes et européennes.",
    skills: ["React", "Node.js", "TypeScript", "UI/UX Design"],
    badges: ["Expert vérifié", "Livraison rapide"]
  },
  {
    id: "p3", name: "Fatma Trabelsi", avatar: avatar3,
    title: "Artisane - Céramique Traditionnelle",
    location: "Nabeul", rating: 4.95, reviews: 203, completedJobs: 312, verified: true,
    hourlyRate: 35, bio: "Artisane de 3ème génération. Céramique traditionnelle de Nabeul, pièces uniques et commandes personnalisées.",
    skills: ["Céramique", "Poterie", "Art traditionnel", "Personnalisation"],
    badges: ["Artisan vérifié", "Best Seller", "Patrimoine"]
  },
  {
    id: "p4", name: "Youssef Gharbi", avatar: avatar4,
    title: "Étudiant Freelance - Graphic Design",
    location: "Sfax", rating: 4.6, reviews: 34, completedJobs: 52, verified: true,
    hourlyRate: 30, bio: "Étudiant en design à l'ISAMS. Logos, branding, et supports marketing pour PME.",
    skills: ["Photoshop", "Illustrator", "Branding", "Social Media"],
    badges: ["Rising Star"]
  },
  {
    id: "p5", name: "Nour Hammami", avatar: avatar5,
    title: "Traductrice FR/AR/EN Certifiée",
    location: "Tunis, Centre Ville", rating: 4.85, reviews: 167, completedJobs: 289, verified: true,
    hourlyRate: 50, bio: "Traductrice assermentée avec 8 ans d'expérience. Documents juridiques, techniques et médicaux.",
    skills: ["Français", "Arabe", "Anglais", "Traduction juridique"],
    badges: ["Certifiée", "Pro vérifié", "200+ missions"]
  },
  {
    id: "p6", name: "Mohamed Jaziri", avatar: avatar6,
    title: "Consultant Business & Stratégie",
    location: "Tunis, Les Berges du Lac", rating: 4.7, reviews: 56, completedJobs: 78, verified: true,
    hourlyRate: 120, bio: "Ex-directeur chez Vermeg. Conseil en stratégie, business plans et accompagnement startup.",
    skills: ["Stratégie", "Business Plan", "Levée de fonds", "Management"],
    badges: ["Senior Expert", "Mentor"]
  },
];

export const currentProvider = providers[0];
export const currentClient: User = {
  id: "c1", name: "Rania Bouazizi", avatar: avatar5,
  title: "Fondatrice, TechStart Tunisia",
  location: "Tunis", rating: 4.8, reviews: 23, completedJobs: 31, verified: true,
  hourlyRate: 0, bio: "Entrepreneur tech cherchant les meilleurs talents tunisiens.",
  skills: [], badges: ["Client Premium"]
};

export const messages: Message[] = [
  { id: "m1", from: providers[1], preview: "Bonjour, j'ai terminé la maquette du site. Pouvez-vous vérifier ?", time: "Il y a 5 min", unread: true },
  { id: "m2", from: providers[2], preview: "Les pièces en céramique sont prêtes pour la livraison.", time: "Il y a 1h", unread: true },
  { id: "m3", from: providers[3], preview: "Merci pour le retour ! Je fais les modifications.", time: "Il y a 3h", unread: false },
  { id: "m4", from: providers[4], preview: "La traduction du contrat est finalisée.", time: "Hier", unread: false },
  { id: "m5", from: providers[5], preview: "Quand êtes-vous disponible pour la consultation ?", time: "Hier", unread: false },
];

export const providerMessages: Message[] = [
  { id: "pm1", from: currentClient, preview: "Super travail sur le dernier projet ! J'ai une nouvelle mission pour vous.", time: "Il y a 10 min", unread: true },
  { id: "pm2", from: { ...providers[5], name: "Ahmed Slim", id: "c2" }, preview: "Pouvez-vous commencer les cours lundi prochain ?", time: "Il y a 2h", unread: true },
  { id: "pm3", from: { ...providers[3], name: "Sana Mahjoub", id: "c3" }, preview: "Le budget a été approuvé, on peut démarrer.", time: "Il y a 5h", unread: false },
];

export const transactions: Transaction[] = [
  { id: "t1", description: "Cours de maths - Semaine 12", amount: 180, type: "credit", date: "2024-03-20", status: "completed", method: "D17" },
  { id: "t2", description: "Préparation Bac - Session intensive", amount: 350, type: "credit", date: "2024-03-18", status: "completed", method: "D17" },
  { id: "t3", description: "Retrait vers compte bancaire", amount: -500, type: "debit", date: "2024-03-15", status: "completed", method: "Virement" },
  { id: "t4", description: "Cours de physique - Groupe", amount: 240, type: "credit", date: "2024-03-14", status: "completed", method: "D17" },
  { id: "t5", description: "Session de révision", amount: 90, type: "credit", date: "2024-03-12", status: "escrow", method: "D17" },
  { id: "t6", description: "Consultation orientation", amount: 120, type: "credit", date: "2024-03-10", status: "pending", method: "Carte" },
];

export const gigs: Gig[] = [
  {
    id: "g1", title: "Développement site e-commerce pour boutique d'artisanat",
    description: "Création d'un site e-commerce complet avec paiement en ligne pour une boutique d'artisanat à Sidi Bou Said.",
    budget: 2500, category: "Développement Web", postedBy: currentClient, postedAt: "Il y a 2h",
    proposals: 8, deadline: "30 jours", skills: ["React", "Node.js", "Stripe"]
  },
  {
    id: "g2", title: "Tuteur de français pour préparation DELF B2",
    description: "Recherche tuteur expérimenté pour préparation à l'examen DELF B2, 3 sessions par semaine.",
    budget: 600, category: "Tutorat", postedBy: { ...currentClient, name: "Ines Khelifi", id: "c4" },
    postedAt: "Il y a 5h", proposals: 12, deadline: "2 mois", skills: ["Français", "DELF", "Pédagogie"]
  },
  {
    id: "g3", title: "Logo et identité visuelle pour startup fintech",
    description: "Création d'un logo moderne et d'une charte graphique complète pour une startup fintech basée à Tunis.",
    budget: 800, category: "Design", postedBy: { ...currentClient, name: "Mehdi Saidi", id: "c5" },
    postedAt: "Il y a 1 jour", proposals: 15, deadline: "15 jours", skills: ["Logo", "Branding", "Figma"]
  },
  {
    id: "g4", title: "Traduction juridique contrat commercial FR→AR",
    description: "Traduction certifiée d'un contrat commercial de 25 pages du français vers l'arabe.",
    budget: 400, category: "Traduction", postedBy: currentClient, postedAt: "Il y a 2 jours",
    proposals: 6, deadline: "7 jours", skills: ["Juridique", "Français", "Arabe"]
  },
];

export const orders: Order[] = [
  { id: "o1", title: "Développement application mobile", provider: providers[1], client: currentClient, amount: 3200, status: "active", date: "2024-03-15", dueDate: "2024-04-15" },
  { id: "o2", title: "Set de céramique personnalisé (12 pièces)", provider: providers[2], client: currentClient, amount: 450, status: "delivered", date: "2024-03-01", dueDate: "2024-03-20" },
  { id: "o3", title: "Cours de maths - Pack mensuel", provider: providers[0], client: currentClient, amount: 720, status: "active", date: "2024-03-10", dueDate: "2024-04-10" },
  { id: "o4", title: "Traduction documents légaux", provider: providers[4], client: currentClient, amount: 350, status: "completed", date: "2024-02-20", dueDate: "2024-03-05" },
  { id: "o5", title: "Refonte logo entreprise", provider: providers[3], client: currentClient, amount: 250, status: "completed", date: "2024-02-15", dueDate: "2024-03-01" },
];

export const reviews: Review[] = [
  { id: "r1", from: currentClient, rating: 5, comment: "Amira est une tutrice exceptionnelle ! Ma fille a amélioré ses notes de 4 points en maths.", date: "2024-03-18", service: "Tutorat Maths" },
  { id: "r2", from: { ...providers[5], name: "Slim Ben Amor", id: "c6" }, rating: 5, comment: "Très patiente et méthodique. Les cours sont bien structurés.", date: "2024-03-10", service: "Physique Bac" },
  { id: "r3", from: { ...providers[3], name: "Leila Ouertani", id: "c7" }, rating: 4, comment: "Bonne pédagogie, horaires flexibles. Je recommande.", date: "2024-03-05", service: "Cours de groupe" },
  { id: "r4", from: { ...providers[4], name: "Karim Jlassi", id: "c8" }, rating: 5, comment: "Excellente préparation au concours. Résultats garantis.", date: "2024-02-28", service: "Prépa concours" },
];

export const calendarEvents: CalendarEvent[] = [
  { id: "e1", title: "Cours de maths - Yasmine", client: "Yasmine Mejri", date: "2024-03-22", time: "09:00", duration: "1h30", type: "tutoring" },
  { id: "e2", title: "Physique - Groupe Bac", client: "Groupe (4 élèves)", date: "2024-03-22", time: "14:00", duration: "2h", type: "tutoring" },
  { id: "e3", title: "Consultation orientation", client: "Ahmed Slim", date: "2024-03-23", time: "10:00", duration: "45min", type: "consultation" },
  { id: "e4", title: "Cours de maths - Sami", client: "Sami Trabelsi", date: "2024-03-23", time: "16:00", duration: "1h", type: "tutoring" },
  { id: "e5", title: "Livraison correction examen", client: "Lycée Carthage", date: "2024-03-24", time: "12:00", duration: "30min", type: "delivery" },
];

export const earningsData = {
  monthly: [
    { month: "Oct", amount: 1200 }, { month: "Nov", amount: 1850 },
    { month: "Déc", amount: 1600 }, { month: "Jan", amount: 2100 },
    { month: "Fév", amount: 2400 }, { month: "Mar", amount: 2800 },
  ],
  totalBalance: 1340,
  pendingEscrow: 210,
  thisMonth: 2800,
  lastMonth: 2400,
};

export const analyticsData = {
  profileViews: 1247,
  responseRate: 96,
  conversionRate: 72,
  avgResponseTime: "12 min",
  viewsHistory: [
    { day: "Lun", views: 45 }, { day: "Mar", views: 62 },
    { day: "Mer", views: 38 }, { day: "Jeu", views: 71 },
    { day: "Ven", views: 55 }, { day: "Sam", views: 89 },
    { day: "Dim", views: 34 },
  ],
};

export const categories = [
  "Tutorat & Formation", "Développement Web", "Design & Créatif",
  "Traduction", "Artisanat", "Conseil & Business", "Marketing Digital",
  "Rédaction", "Comptabilité", "Photographie"
];