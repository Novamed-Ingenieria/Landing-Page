import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Heart, Users, PawPrint } from 'lucide-react';

const Join = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState('');
  const [members, setMembers] = useState(0);

  useEffect(() => {
    const clowderMembers = JSON.parse(
      localStorage.getItem('clowderMembers') || '[]',
    );
    setMembers(clowderMembers.length);
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor ingresa tu correo electrónico');
      return;
    }
    if (!email.includes('@')) {
      setError('Por favor ingresa un correo válido');
      return;
    }

    // Save to localStorage
    const clowderMembers = JSON.parse(
      localStorage.getItem('clowderMembers') || '[]',
    );
    if (!clowderMembers.includes(email)) {
      clowderMembers.push(email);
      localStorage.setItem('clowderMembers', JSON.stringify(clowderMembers));
      setMembers(clowderMembers.length);
    }

    setJoined(true);
    setEmail('');
    setError('');
  };

  return (
    <div className="from-primary/10 via-background to-accent/10 flex min-h-screen flex-col bg-gradient-to-br p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto w-full max-w-2xl"
      >
        <a href="/">
          <button
            data-testid="button-back-join"
            className="hover:bg-secondary/20 mb-6 rounded-full p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        </a>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-card/95 overflow-hidden rounded-[2rem] border-none shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center gap-8 p-12 text-center md:p-16">
              {!joined ? (
                <>
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-center">
                      <div className="bg-primary/20 flex h-20 w-20 items-center justify-center rounded-full">
                        <PawPrint className="text-primary h-10 w-10" />
                      </div>
                    </div>
                    <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
                      Unete
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-md text-lg leading-relaxed">
                      "Clowder" es un grupo de gatos. Únete a nuestra comunidad
                      de buscadores del zen y amantes de los gatos en todo el
                      mundo.
                    </p>
                  </motion.div>

                  {/* Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
                  >
                    <div className="space-y-2">
                      <Mail className="text-primary mx-auto h-6 w-6" />
                      <p className="text-foreground text-sm font-bold">
                        Consejos semanales
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Consejos y afirmaciones zen semanales
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Heart className="text-primary mx-auto h-6 w-6" />
                      <p className="text-foreground text-sm font-bold">
                        Comunidad
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Conéctate con nuestra comunidad de meditación
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Users className="text-primary mx-auto h-6 w-6" />
                      <p className="text-foreground text-sm font-bold">
                        Exclusivo
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Accede a contenido solo para miembros
                      </p>
                    </div>
                  </motion.div>

                  {/* Form */}
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={handleJoin}
                    className="w-full space-y-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        data-testid="input-email-join"
                        className="bg-secondary/20 focus:border-primary flex-1 rounded-full border-2 border-transparent px-6 py-4 text-lg transition-all focus:outline-none"
                      />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          data-testid="button-join-submit"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-bold shadow-lg"
                        >
                          Unirme ahora
                        </button>
                      </motion.div>
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-medium text-red-500"
                      >
                        {error}
                      </motion.p>
                    )}
                  </motion.form>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="border-border/40 w-full border-t pt-6"
                  >
                    <div className="flex items-center justify-center gap-6 text-sm">
                      <div>
                        <p className="text-foreground text-lg font-bold">
                          {members}+
                        </p>
                        <p className="text-muted-foreground">Miembros</p>
                      </div>
                      <div className="bg-border/40 h-8 w-px" />
                      <div>
                        <p className="text-foreground text-lg font-bold">
                          24/7
                        </p>
                        <p className="text-muted-foreground">
                          Soporte disponible
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Privacy note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground text-xs"
                  >
                    Respetamos tu privacidad. Sin spam, solo zen. Siempre. 🐱
                  </motion.p>
                </>
              ) : (
                <>
                  {/* Success State */}
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-full space-y-6"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center"
                    >
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                        <Heart className="h-12 w-12 fill-current text-green-600" />
                      </div>
                    </motion.div>

                    <div className="space-y-2">
                      <h2 className="font-heading text-foreground text-3xl font-bold">
                        ¡Bienvenido al Clowder!
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        Ahora formas parte de nuestra comunidad amante de los
                        gatos. Revisa tu correo para contenido exclusivo. 📧
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3 pt-4"
                    >
                      <p className="text-foreground font-bold">¿Qué sigue?</p>
                      <div className="mx-auto max-w-sm space-y-2 text-left">
                        <p className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">✓</span>
                          <span>
                            Consejos de meditación semanales en tu bandeja
                            de entrada
                          </span>
                        </p>
                        <p className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">✓</span>
                          <span>
                            Técnicas de respiración y afirmaciones exclusivas
                          </span>
                        </p>
                        <p className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">✓</span>
                          <span>Únete a nuestra comunidad creciente de buscadores del zen</span>
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="pt-4"
                    >
                      <a href="/app">
                          <button
                            data-testid="button-start-meditation"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-bold"
                          >
                            Comenzar a meditar ahora
                          </button>
                      </a>
                    </motion.div>

                    <a href="/" className="inline-block">
                      <button
                        data-testid="button-back-home-join"
                        className="border-primary text-primary hover:bg-primary/10 rounded-full border-2 px-8 py-2 transition-colors"
                      >
                        Volver al inicio
                      </button>
                    </a>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
